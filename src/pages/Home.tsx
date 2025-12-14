import { useForm } from "react-hook-form";
import CtaFooterSection from "../components/homeComponents/CtaFooterSection";
import Hero from "../components/homeComponents/Hero";
import Journey from "../components/homeComponents/Journey";
import PortfolioSection from "../components/homeComponents/PortfolioSection";
import StatsAndServices from "../components/homeComponents/StatsAndServices";
import TechStack from "../components/homeComponents/TechStack";
import mainData from "../data/mainData";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from "../schemas/contactUsSchema";
import { useEffect, useState } from "react";
import type { DataFormProps } from "../types/formTypes";
import sendEmail from "../services/sendEmail";
import { useLocation } from "react-router-dom";
import EmailStatusModal, { type ModalStatus } from "../components/homeComponents/EmailStatusModal";

const Home = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const location = useLocation()
    const [modalStatus, setModalStatus] = useState<ModalStatus>(null)

    const { handleSubmit, formState: { errors }, register, reset } = useForm({
        resolver: zodResolver(contactUsSchema)
    })

    useEffect(() => {
        if (!location.hash) return

        const target = document.querySelector(location.hash)
        if (!target) return

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }, [location])

    const submitForm = async (data: DataFormProps) => {
        try {
            await sendEmail(data)
            setModalStatus("success")
            setModalOpen(true)
            reset()
        } catch (error) {
            console.error(error)
            setModalStatus("failure")
            setModalOpen(true)
        }

    }

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div className="min-h-screen bg-zinc-700 text-white font-sans">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Hero name={mainData.profile.name} socialHub={mainData.profile.social} profileImg1={mainData.profile.profileImage1} profileImg2={mainData.profile.profileImage2} />
            </main>

            <StatsAndServices coreData={mainData.core} />
            <TechStack data={mainData.techStack} />
            <PortfolioSection projectData={mainData.project} />

            <Journey company={mainData.journey} />

            {/* Tambahkan CTA / Footer Section di sini */}
            <CtaFooterSection errors={errors} onSubmit={handleSubmit(submitForm)} register={register} email={mainData.profile.email} />
            <EmailStatusModal isOpen={isModalOpen} onClose={closeModal} status={modalStatus} />

        </div>
    );
}

export default Home