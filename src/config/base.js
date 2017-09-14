// @flow
// import apiUrls from './apiUrls';

const getAttr = (element, attribute, fallback = '/') => {
  if (element !== null) {
    if (element.hasAttribute(attribute)) {
      return element.getAttribute(attribute);
    }
  }
  return fallback;
};

const appDiv = () => {
  let appDivVar = null;
  try {
    appDivVar = document.getElementById('retirement-app');
  } catch (e) {
    appDivVar = null;
  }
  return appDivVar;
};

const routerPath = getAttr(appDiv(), 'data-router-path', '');

const base: {
  commonTiming: number,
  routerPath: string,
  maxWidthSmallViewports: number,
} = {
  commonTiming: 150,
  routerPath,
  maxWidthSmallViewports: 640,
};

export default base;
