export default function CTA({
    link = "/",
    text = "Call Now"
}) {
    return (
        <a href={link}>{text}</a>
    )
}