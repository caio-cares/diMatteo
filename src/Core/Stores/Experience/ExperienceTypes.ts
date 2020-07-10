export enum ExperienceTypes {
  ADD = '@experience/ADD',
  REQUEST = '@experience/REQUEST',
  FAILURE = '@experience/FAILURE',
  SET = '@experience/SET'
}

export interface Experience {
  id: number,
  menu: string,
  description: string,
  picture: string
}

export interface ExperiencesState {
  readonly data: Experience[],
  readonly loading: boolean,
  readonly error: boolean,
  currentExperience: Experience
}