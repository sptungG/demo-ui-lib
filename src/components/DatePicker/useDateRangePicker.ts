import { useCallback } from "react";
import { Moment } from "moment";

const useDateRangePicker = () => {
  return useCallback((date: Moment, firstValue: Date | null | undefined, secondValue: Date | null | undefined) => {
    if (!firstValue) {
      return {
        firstValue: date.toDate(),
        secondValue: null,
      };
    }
    if (!secondValue) {
      if (date.isBefore(firstValue, "day")) {
        return {
          firstValue: date.toDate(),
          secondValue: secondValue,
        };
      } else {
        return {
          firstValue: firstValue,
          secondValue: date.toDate(),
        };
      }
    }
    return {
      firstValue: date.toDate(),
      secondValue: null,
    };
  }, []);
};

export default useDateRangePicker;
