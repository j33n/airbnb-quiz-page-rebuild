import React, { useEffect, useState } from "react";

import { Header } from "components";

import { QuizType, QuizResponseType } from "types";

import quizData from "data/quiz";

import {
  MainContainerStyle,
  Container,
  HeaderContentStyled,
  ResultsBoxStyled,
  ContainerResultStyled,
  QuestionStyled,
  AnswerStyled,
} from "styles/SuccessStyle";

export type DataToRenderType = {
  question: string;
  answer: string;
};

const Success = () => {
  const [resDataFetched, setResDataFetched] = useState<DataToRenderType[]>([]);

  useEffect(() => {
    const quizResult: QuizResponseType[] = JSON.parse(
      localStorage.getItem("quizData") || ""
    );
    formalizeData(quizResult, quizData);
  }, []);

  const formalizeData = (
    quizResult: QuizResponseType[],
    quizData: QuizType
  ) => {
    const result: DataToRenderType[] = [];
    quizResult.map((res: QuizResponseType) => {
      result.push({
        question: quizData[res.answerId - 1]?.title,
        answer:
          quizData[res.answerId - 1]?.answers[res.responseId - 1]?.description,
      });
    });

    setResDataFetched(result);
  };

  return (
    <Container>
      <MainContainerStyle>
        <HeaderContentStyled>
          <Header
            title="HomeAppeal Renovation Results"
            description="Results for the quiz:"
          />
        </HeaderContentStyled>
      </MainContainerStyle>
      <ResultsBoxStyled>
        {resDataFetched.map((res: DataToRenderType, key) => (
          <ContainerResultStyled key={res.question + key}>
            <QuestionStyled>{res.question}</QuestionStyled>
            <AnswerStyled>{res.answer}</AnswerStyled>
          </ContainerResultStyled>
        ))}
      </ResultsBoxStyled>
    </Container>
  );
};

export default Success;
