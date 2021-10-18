import durationAlgorithm from "../src/duration-algorithm";
import data1 from "../db/data-1.json";
import data2 from "../db/data-2.json";
import data3 from "../db/data-3.json";
import data4 from "../db/data-4.json";
import data5 from "../db/data-5.json";

describe("durationAlgorithm", () => {
  describe("data-1", () => {
    const data = [...data1];
    it("should throw an error if the task is dependent on itself", () => {
      expect(() => durationAlgorithm(data)).toThrow();
    });
  });

  describe("data-2", () => {
    const data = [...data2];
    xit("should throw an error if there is a circular dependency", () => {
      expect(() => durationAlgorithm(data)).toThrow();
    });
  });

  describe("data-3", () => {
    const data = [...data3];
    xit("should return 24 for the third dataset", () => {
      const result = durationAlgorithm(data);

      expect(result).toEqual(24);
    });
  });

  describe("data-4", () => {
    const data = [...data4];
    xit("should return 24 for the fourth dataset", () => {
      const result = durationAlgorithm(data);

      expect(result).toEqual(24);
    });
  });

  describe("data-4", () => {
    const data = [...data5];
    xit("should return 25 for the fifth dataset", () => {
      const result = durationAlgorithm(data);

      expect(result).toEqual(25);
    });
  });
});