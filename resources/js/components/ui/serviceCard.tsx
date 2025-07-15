
interface CardProps {
    image: string
    title: string
    price: string
}

export const Card = ({ image, title, price }: CardProps) => {
    return (
        <button className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})`}}>
            <h1 className="text-[20px] text-[var(--custom-middle-white)]">
                {title}
            </h1>

            <span className="text-2xl text=[var(--custom-middle-white)]">
                {price}
            </span>
        </button>
    )
}