import "./centeredCard.css"

export default function CenteredCard({children}){
    return(
        <div className="cardStyle">
            <span>
                {children}
            </span>
        </div>
    )
}