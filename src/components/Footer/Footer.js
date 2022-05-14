import "./style.css";
// import flashCards from "../Deck/flashCards";

// export default function Footer({ qntAnswers }) {
//     return (
//         <div className="footer">
//             <p>{qntAnswers}/{flashCards.length} CONCLUÍDOS</p>
//         </div>
//     );
// }

export default function Footer(props) {
    return (
        <div className="footer">
            {props.children}
        </div>
    );
}
