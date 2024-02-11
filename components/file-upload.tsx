"use client"
import { OurFileRouter } from "@/app/api/uploadthing/core";
// import { UploadDropzone } from "@/lib/uploadthing";

import { UploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css"
import { X } from "lucide-react";
import Image from "next/image";


interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage";
}



export const  FileUpload = ({onChange, value, endpoint}: FileUploadProps) => {
    const fileType = value?.split(".").pop();

    if (value && fileType != "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image
                fill
                src={value}
                alt="Upload"
                className="rounded-full"/>



            </div>
        )
    }

    return (
        <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            onChange(res?.[0].url)
            alert("Upload Completed")}}
        onUploadError={(error: Error) => {console.log(error)}} />
    )
}