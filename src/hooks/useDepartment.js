import { useEffect, useState } from "react";

import { GetDepartments } from "../services/ApiService";

const useDepartment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    GetDepartments()
      .then((response) => {
        setDepartment(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [
    {
      department,
      hasError,
      isLoading,
    },
  ];
};

export default useDepartment;
