import React, { useEffect, useState } from "react";
import LoadingDashboard from "../../common/LoadingDashboard";
import Lists from "./components";

function List() {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return <>{loading ? <LoadingDashboard loading={loading} /> : <Lists />}</>;
}

export default List;
