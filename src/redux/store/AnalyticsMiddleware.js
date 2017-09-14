const AnalyticsMiddleware = () => next => (action) => {
  if (action.meta && action.meta.ga) {
    const { cat, act, lab } = action.meta.ga;
    window.ga('send', 'event', cat, act, lab);
  }
  return next(action);
};

export default AnalyticsMiddleware;
