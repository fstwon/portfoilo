import { useEffect, useRef, useState } from "react";
import { ONBOARDING_WORD, ONBOARDING_WORD_REG_PATTERN, substringWord } from "../../utils/substringWord/substringWord.util";
import "./firstWord.styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Root.redux";
import classNames from "classnames";
import { SoTextLogo } from "../../../../resource/images/text_logo/TextLogo";

type TWord = string;

export function FirstWord() {
  const [word, setWord] = useState<TWord>(() => ONBOARDING_WORD.KO.substring(0, 2))
  const firstWordTimeoutId = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    let timeoutDelay = 2500
    let nextWord = word.trim()
    let indexEnd = 2
    
    const indexStart = 0
    const timeoutDefaultDelay = 1200

    if(ONBOARDING_WORD.RESULT.includes(nextWord)) {
      clearTimeout(firstWordTimeoutId.current)
    }
    if(firstWordTimeoutId.current !== null) {
      clearTimeout(firstWordTimeoutId.current)
    }
    if(ONBOARDING_WORD_REG_PATTERN.EN.test(nextWord)) {
      nextWord = ONBOARDING_WORD.RESULT
      timeoutDelay = timeoutDefaultDelay
      indexEnd = 4
    }
    if(ONBOARDING_WORD_REG_PATTERN.CH.test(nextWord)) {
      nextWord = ONBOARDING_WORD.EN
      timeoutDelay = timeoutDefaultDelay
      indexEnd = 4
    }
    if(ONBOARDING_WORD_REG_PATTERN.KO.test(nextWord)) {
      nextWord = ONBOARDING_WORD.CH
    }
    nextWord = substringWord({nextWord, indexStart, indexEnd})
    firstWordTimeoutId.current = setTimeout(() => {
      setWord(() => nextWord)
    }, timeoutDelay)
  }, [word]);

  useEffect(() => {
    return () => {
      setWord(() => ONBOARDING_WORD.KO.substring(0, 2))
      clearTimeout(firstWordTimeoutId.current)
    }
  }, [])

  return (
    <div className={classNames('onboarding_page_first_word')} >
      {word}
    </div>
  )
};