import { memo, useEffect } from "react";
import styled from "styled-components";

interface PropsType {
  readonly countdown: number;
  readonly setCountdown: (count:any) => void;
};

const BodyStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TriggerButton = styled.div`
  background: dodgerblue;
  cursor: pointer;
  border-radius: 15px;
  padding: 15px 30px;
`;

function Body({countdown, setCountdown}:PropsType) {

  useEffect(() => {
    const interval = setInterval(() => {
      countdown > 0 ? setCountdown((perv: number) => perv - 1) : clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <BodyStyle>
      <TriggerButton onClick={()=>setCountdown(15)} >
        Start countdown
      </TriggerButton>
    </BodyStyle>
  );
}

export default memo(Body);
