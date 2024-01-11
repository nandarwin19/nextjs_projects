import NewTour from "@/components/NewTour";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

const TourPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
};

export default TourPage;
