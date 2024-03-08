import { ReactNode } from "react";
import Nav from "../components/Nav";

interface Props {
  children?: ReactNode
}

const MainTemplate = ({children} : Props)=> {
  return (
    <>
      <Nav></Nav>
      <main>
        {children}
      </main>
    </>
  )
};

export default MainTemplate;