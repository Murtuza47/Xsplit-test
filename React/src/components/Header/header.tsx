import { IHeader } from "../../interface";

export const Header = ({ label }: IHeader) => (
  <header>
    <h1 style={{ marginLeft: "10px" }}>{label}</h1>
  </header>
)