type TString = string;
type TIndex = number;

export interface IWord {
  nextWord: TString;
  indexStart: TIndex; 
  indexEnd: TIndex;
};

interface ION_ONBOARDING_CHILDREN {
  KO: TString;
  CH: TString;
  EN: TString;
  RESULT: TString;
};

export const ONBOARDING_WORD = {
  KO: "원 일",
  CH: "元 一",
  EN: "1st One",
  RESULT: "FST WON"
};

export const ONBOARDING_WORD_REG_PATTERN = {
  KO: /^[ㄱ-ㅎ|가-힣]+$/,
  CH: /([一-龥豈-龎]+)/,
  EN: /[A-Za-z]/
};

export const substringWord = ({nextWord, indexStart, indexEnd}:IWord) => {
  let substringNextWord = nextWord.substring(indexStart, indexEnd)
  if(indexEnd === 0) {
    substringNextWord = nextWord.substring(indexStart)
  }
  return substringNextWord || ""
};
