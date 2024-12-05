import toast from "react-hot-toast"

interface toastProps {
    message: string,
    type: "success" | "error" | "loading",
    duration: number
}

export default function reactToast({message, type, duration}: toastProps){
    return toast[type](`${message}`, {
        duration,
        style: {
            background: 'rgb(38 38 38)',
            color: 'rgb(223, 226, 232)',
            border: '1px solid gray' 
        }
    })
}