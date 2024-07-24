import { useEffect, useRef, useState } from "react";
import { ONBOARDING_WORD, ONBOARDING_WORD_REG_PATTERN, substringWord } from "../../utils/substringWord/substringWord.util";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "../../../../redux/App.redux";
import { RootState } from "../../../../redux/Root.redux";
import './secondWord.styles.scss';

type TWord = string;

export function SecondWord() {
  const [word, setWord] = useState<TWord>(() => ONBOARDING_WORD.KO.substring(2))
  const { IS_INIT_RENDER } = useSelector((state:RootState) => state.AppReducer)
  const SecondWordTimeoutId = useRef<ReturnType<typeof setTimeout>>()
  const InitTimeoutId = useRef<ReturnType<typeof setTimeout>>()
  const dispatch = useDispatch()

  useEffect(() => {
    let timeoutDelay = 3000
    let nextWord = word.trim()
    let indexStart = 2
    
    const timeoutDefaultDelay = 1200
    const indexEnd = 0

    if(ONBOARDING_WORD.RESULT.includes(word)) {
      clearTimeout(SecondWordTimeoutId.current)
      InitTimeoutId.current = setTimeout(() => {
        dispatch(initializeApp())
        clearTimeout(InitTimeoutId.current)
      }, 500)
    }
    if(SecondWordTimeoutId.current !== null) {
      clearTimeout(SecondWordTimeoutId.current)
    }
    if(ONBOARDING_WORD_REG_PATTERN.EN.test(nextWord)) {
      nextWord = ONBOARDING_WORD.RESULT
      timeoutDelay = timeoutDefaultDelay
      indexStart = 4
    }
    if(ONBOARDING_WORD_REG_PATTERN.CH.test(nextWord)) {
      nextWord = ONBOARDING_WORD.EN
      timeoutDelay = timeoutDefaultDelay
      indexStart = 4
    }
    if(ONBOARDING_WORD_REG_PATTERN.KO.test(nextWord)) {
      nextWord = ONBOARDING_WORD.CH
    }
    nextWord = substringWord({nextWord, indexStart, indexEnd})
    SecondWordTimeoutId.current = setTimeout(() => {
      setWord(() => nextWord)
    }, timeoutDelay)
  }, [word]);

  useEffect(() => {
    return () => {
      setWord(() => ONBOARDING_WORD.KO.substring(2))
      clearTimeout(SecondWordTimeoutId.current)
    }
  }, [])

  return (
    <div className='onboarding_page_second_word' >
      {IS_INIT_RENDER && word}
    </div>
  )
};