import { Config } from "@baltimorecounty/javascript-utilities";
import axios from "axios";

const { getValue } = Config;

/**
 * Determines if api is up or not
 * @returns true if the api is available
 */
const GetStatus = () =>
  axios
    .get(`${getValue("apiRoot")}/status`)
    .then(({ status }) => status === 200);

/**
 * Get Dept Data from Service
 */
const GetDepartments = () =>
  axios
    .get(`${getValue("apiRoot")}`)
    .then(({ status, data }) => (status === 200 ? data : []));

export { GetStatus, GetDepartments };
