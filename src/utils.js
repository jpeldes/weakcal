import moment from "moment";

window.moment = moment;

export const updateMomentJsLocale = ({ dow }) => {
  moment.updateLocale(moment.locale(), {
    week: {
      dow
    }
  });
};
