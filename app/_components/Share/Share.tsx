'use client';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton } from "react-share";

export const Share = ()=>{
    return (
        <div className='flex flex-col items-center md:items-start w-full bg-gray-100 p-10 rounded-lg gap-6'>
            <h2 className='text-xl md:text-3xl font-bold opacity-70 text-center md:text-left'>
                Compartí este artículo con tus amigos
            </h2>
            <div className='flex flex-row gap-5 flex-wrap justify-center md:justify-start'>
                <WhatsappShareButton url='https://esi.tdm.ar'>
                    <IconBrandWhatsapp size={48} color="#5F45BA"/>
                </WhatsappShareButton>
                <FacebookShareButton url='https://esi.tdm.ar'>
                    <IconBrandFacebook size={48} color="#5F45BA"/>
                </FacebookShareButton>
                <LinkedinShareButton url='https://esi.tdm.ar'>
                    <IconBrandLinkedin size={48} color="#5F45BA"/>
                </LinkedinShareButton>
                <TelegramShareButton url='https://esi.tdm.ar'>
                    <IconBrandTelegram size={48} color="#5F45BA"/>
                </TelegramShareButton>
            </div>
        </div>
    )
}