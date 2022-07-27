import { IBallisticsObject } from "../models/IBallisticsObject";

export interface IAimDistanceMark extends IBallisticsObject {
  marks: Array<number>;
  given_distances: Array<number>;
}
