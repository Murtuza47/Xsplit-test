import { IButton } from "../../interface";
import "./button.scss"

export const Button = ({ label, color, onClick }: IButton) => (
  <button className='button' style={{ background: color }} onClick={(event) => {
    event.stopPropagation()
    onClick()

  }}>{label}</button>
)