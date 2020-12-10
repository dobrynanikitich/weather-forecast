import { defineCurrentUserPosition } from './constants/constants';

export const getUserLocationHandler = () => {
    return fetch(defineCurrentUserPosition)
      .then(res => res.json())
        .then(res => res)
}