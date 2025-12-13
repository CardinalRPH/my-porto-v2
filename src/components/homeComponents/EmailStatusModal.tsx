// src/components/EmailStatusModal.tsx
import React from 'react';
import { FaTimes, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

// Tentukan Tipe Status
export type ModalStatus = 'success' | 'failure' | null;

interface EmailStatusModalProps {
    isOpen: boolean;
    status: ModalStatus;
    onClose: () => void;
}

const EmailStatusModal: React.FC<EmailStatusModalProps> = ({ isOpen, status, onClose }) => {

    // Jika modal tidak terbuka atau status null, return null
    if (!isOpen || !status) {
        return null;
    }

    // --- 1. Konfigurasi Konten Berdasarkan Status ---
    let config = {
        icon: FaCheckCircle,
        iconColor: 'text-green-500',
        title: 'Status Email',
        message: 'Aksi Anda sedang diproses...',
        showCloseButton: true,
        isSending: false,
    };

    switch (status) {
        case 'success':
            config = {
                icon: FaCheckCircle,
                iconColor: 'text-green-500',
                title: 'Message Sent Successfully!',
                message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
                showCloseButton: true,
                isSending: false,
            };
            break;

        case 'failure':
            config = {
                icon: FaExclamationTriangle,
                iconColor: 'text-red-500',
                title: 'Message Sending Failed',
                message: 'Sorry, your message could not be sent. Please check your connection or try again later.',
                showCloseButton: true,
                isSending: false,
            };
            break;

    }

    // --- 2. Render Modal ---
    const IconComponent = config.icon;

    return (
        // OVERLAY
        <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center transition-opacity duration-300"
            // Tutup hanya jika tidak dalam status 'sending'
            onClick={config.isSending ? undefined : onClose}
        >

            {/* MODAL CONTENT */}
            <div
                className="bg-zinc-800 rounded-lg shadow-2xl p-8 w-11/12 max-w-md transform scale-100 transition-transform duration-300"
                // Hentikan penyebaran event
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start pb-4">

                    {/* Ikon Status */}
                    <IconComponent
                        className={`${config.iconColor} text-4xl mr-4 ${config.isSending ? 'animate-spin' : ''}`}
                    />

                    <div className="grow">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {config.title}
                        </h3>
                        <p className="text-gray-300">
                            {config.message}
                        </p>
                    </div>

                    {/* Tombol Tutup (Hanya tampil jika diizinkan) */}
                    {config.showCloseButton && (
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition ml-4 cursor-pointer"
                            aria-label="Tutup"
                        >
                            <FaTimes size={20} />
                        </button>
                    )}
                </div>

                {/* Tombol Aksi (Hanya tampil jika tidak 'sending') */}
                {!config.isSending && (
                    <div className="flex justify-end space-x-4 pt-4 border-t border-gray-700 mt-4">

                        {config.showCloseButton && (
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-semibold text-gray-300 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition cursor-pointer"
                            >
                                Close
                            </button>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default EmailStatusModal;