import { action } from 'typesafe-actions';
import { Experience, ExperienceTypes } from './ExperienceTypes';

export const getExperiences = () => action(ExperienceTypes.REQUEST);

export const saveExperiences = (data: Experience[]) => action(ExperienceTypes.ADD, {data});

export const setExperience = (data: Experience) => action(ExperienceTypes.SET, data);

export const setFailure = () => action(ExperienceTypes.FAILURE);