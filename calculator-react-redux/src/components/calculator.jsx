import React from "react";
import styled from "styled-components";

const Calculator = () => {
  return (
    <>
      <section>
        <div>
          <InputField>
            <p>input-field</p>
          </InputField>
        </div>
      </section>
      <section>
        <NumberGrid>
          <div>
            <button>1</button>
            <button>1</button>
          </div>
        </NumberGrid>
      </section>
    </>
  );
};

const InputField = styled.p`
  background-color: gray;
  border-width: 10px;
  border-radius: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5em;
  font-weight: bold;
  text-align: right;
  color: black;
`;
const NumberGrid = styled.div``;
export default Calculator;
