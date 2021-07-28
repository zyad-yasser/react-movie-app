import { Cast, Crew, MovieCredits } from "../types/movies";

export const findByJob = (list: Array<Crew|Cast>, job: string): Crew|Cast|undefined => {
  return list.find(({ known_for_department }) => known_for_department === job);
}

export const findIndexByJob = (list: Array<Crew|Cast>, job: string): number => {
  return list.findIndex(({ known_for_department }) => known_for_department === job);
}

export const getPersonNameByJob = ({ cast = [], crew = [] }: MovieCredits, job: string, skip: number = -1) => {
  const combinedList = [...cast, ...crew];
  let searchList = [];

  if (skip > -1) {
    const firstIndex = findIndexByJob(combinedList, job) + 1 + (skip || 0);
    searchList = combinedList.slice(firstIndex, combinedList.length);
  } else {
    searchList = combinedList;
  }
  const person = findByJob(searchList, job);
  return person?.name;
}