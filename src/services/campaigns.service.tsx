// export const GetCampaigns = async (): Promise<IApiResponse<ICampaign[]>> =>
//   fetcher({ method: "get", url: CAMPAIGN });

export const GetCampaigns = async () => ({
  data: [
    {
      uuid: "some-uuid-1",
      title: "Campaign 1",
      status: "active",
      statusCode: "code-1",
      statusPercentage: "75%",
      dateFrom: "2023-07-01",
      dateTo: "2023-08-01",
      name: "Campaign Name 1",
      address: "Campaign Address 1",
    },
    {
      uuid: "some-uuid-2",
      title: "Campaign 2",
      status: "inactive",
      statusCode: "code-2",
      statusPercentage: "50%",
      dateFrom: "2023-07-02",
      dateTo: "2023-08-02",
      name: "Campaign Name 2",
      address: "Campaign Address 2",
    },
    {
      uuid: "some-uuid-3",
      title: "Campaign 3",
      status: "active",
      statusCode: "code-3",
      statusPercentage: "90%",
      dateFrom: "2023-07-03",
      dateTo: "2023-08-03",
      name: "Campaign Name 3",
      address: "Campaign Address 3",
    },
    {
      uuid: "some-uuid-4",
      title: "Campaign 4",
      status: "inactive",
      statusCode: "code-4",
      statusPercentage: "60%",
      dateFrom: "2023-07-04",
      dateTo: "2023-08-04",
      name: "Campaign Name 4",
      address: "Campaign Address 4",
    },
    {
      uuid: "some-uuid-5",
      title: "Campaign 5",
      status: "active",
      statusCode: "code-5",
      statusPercentage: "80%",
      dateFrom: "2023-07-05",
      dateTo: "2023-08-05",
      name: "Campaign Name 5",
      address: "Campaign Address 5",
    },
    {
      uuid: "some-uuid-6",
      title: "Campaign 6",
      status: "inactive",
      statusCode: "code-6",
      statusPercentage: "40%",
      dateFrom: "2023-07-06",
      dateTo: "2023-08-06",
      name: "Campaign Name 6",
      address: "Campaign Address 6",
    },
    {
      uuid: "some-uuid-7",
      title: "Campaign 7",
      status: "active",
      statusCode: "code-7",
      statusPercentage: "70%",
      dateFrom: "2023-07-07",
      dateTo: "2023-08-07",
      name: "Campaign Name 7",
      address: "Campaign Address 7",
    },
    {
      uuid: "some-uuid-8",
      title: "Campaign 8",
      status: "inactive",
      statusCode: "code-8",
      statusPercentage: "55%",
      dateFrom: "2023-07-08",
      dateTo: "2023-08-08",
      name: "Campaign Name 8",
      address: "Campaign Address 8",
    },
    {
      uuid: "some-uuid-9",
      title: "Campaign 9",
      status: "active",
      statusCode: "code-9",
      statusPercentage: "85%",
      dateFrom: "2023-07-09",
      dateTo: "2023-08-09",
      name: "Campaign Name 9",
      address: "Campaign Address 9",
    },
    {
      uuid: "some-uuid-10",
      title: "Campaign 10",
      status: "inactive",
      statusCode: "code-10",
      statusPercentage: "30%",
      dateFrom: "2023-07-10",
      dateTo: "2023-08-10",
      name: "Campaign Name 10",
      address: "Campaign Address 10",
    },
    {
      uuid: "some-uuid-11",
      title: "Campaign 11",
      status: "active",
      statusCode: "code-11",
      statusPercentage: "60%",
      dateFrom: "2023-07-11",
      dateTo: "2023-08-11",
      name: "Campaign Name 11",
      address: "Campaign Address 11",
    },
    {
      uuid: "some-uuid-12",
      title: "Campaign 12",
      status: "inactive",
      statusCode: "code-12",
      statusPercentage: "45%",
      dateFrom: "2023-07-12",
      dateTo: "2023-08-12",
      name: "Campaign Name 12",
      address: "Campaign Address 12",
    },
    {
      uuid: "some-uuid-13",
      title: "Campaign 13",
      status: "active",
      statusCode: "code-13",
      statusPercentage: "80%",
      dateFrom: "2023-07-13",
      dateTo: "2023-08-13",
      name: "Campaign Name 13",
      address: "Campaign Address 13",
    },
    {
      uuid: "some-uuid-14",
      title: "Campaign 14",
      status: "inactive",
      statusCode: "code-14",
      statusPercentage: "35%",
      dateFrom: "2023-07-14",
      dateTo: "2023-08-14",
      name: "Campaign Name 14",
      address: "Campaign Address 14",
    },
    {
      uuid: "some-uuid-15",
      title: "Campaign 15",
      status: "active",
      statusCode: "code-15",
      statusPercentage: "65%",
      dateFrom: "2023-07-15",
      dateTo: "2023-08-15",
      name: "Campaign Name 15",
      address: "Campaign Address 15",
    },
    {
      uuid: "some-uuid-16",
      title: "Campaign 16",
      status: "inactive",
      statusCode: "code-16",
      statusPercentage: "50%",
      dateFrom: "2023-07-16",
      dateTo: "2023-08-16",
      name: "Campaign Name 16",
      address: "Campaign Address 16",
    },
    {
      uuid: "some-uuid-17",
      title: "Campaign 17",
      status: "active",
      statusCode: "code-17",
      statusPercentage: "90%",
      dateFrom: "2023-07-17",
      dateTo: "2023-08-17",
      name: "Campaign Name 17",
      address: "Campaign Address 17",
    },
    {
      uuid: "some-uuid-18",
      title: "Campaign 18",
      status: "inactive",
      statusCode: "code-18",
      statusPercentage: "75%",
      dateFrom: "2023-07-18",
      dateTo: "2023-08-18",
      name: "Campaign Name 18",
      address: "Campaign Address 18",
    },
    {
      uuid: "some-uuid-19",
      title: "Campaign 19",
      status: "active",
      statusCode: "code-19",
      statusPercentage: "95%",
      dateFrom: "2023-07-19",
      dateTo: "2023-08-19",
      name: "Campaign Name 19",
      address: "Campaign Address 19",
    },
    {
      uuid: "some-uuid-20",
      title: "Campaign 20",
      status: "inactive",
      statusCode: "code-20",
      statusPercentage: "20%",
      dateFrom: "2023-07-20",
      dateTo: "2023-08-20",
      name: "Campaign Name 20",
      address: "Campaign Address 20",
    },
    {
      uuid: "some-uuid-21",
      title: "Campaign 21",
      status: "active",
      statusCode: "code-21",
      statusPercentage: "70%",
      dateFrom: "2023-07-21",
      dateTo: "2023-08-21",
      name: "Campaign Name 21",
      address: "Campaign Address 21",
    },
    {
      uuid: "some-uuid-22",
      title: "Campaign 22",
      status: "inactive",
      statusCode: "code-22",
      statusPercentage: "55%",
      dateFrom: "2023-07-22",
      dateTo: "2023-08-22",
      name: "Campaign Name 22",
      address: "Campaign Address 22",
    },
    {
      uuid: "some-uuid-23",
      title: "Campaign 23",
      status: "active",
      statusCode: "code-23",
      statusPercentage: "85%",
      dateFrom: "2023-07-23",
      dateTo: "2023-08-23",
      name: "Campaign Name 23",
      address: "Campaign Address 23",
    },
    {
      uuid: "some-uuid-24",
      title: "Campaign 24",
      status: "inactive",
      statusCode: "code-24",
      statusPercentage: "30%",
      dateFrom: "2023-07-24",
      dateTo: "2023-08-24",
      name: "Campaign Name 24",
      address: "Campaign Address 24",
    },
    {
      uuid: "some-uuid-25",
      title: "Campaign 25",
      status: "active",
      statusCode: "code-25",
      statusPercentage: "60%",
      dateFrom: "2023-07-25",
      dateTo: "2023-08-25",
      name: "Campaign Name 25",
      address: "Campaign Address 25",
    },
    {
      uuid: "some-uuid-26",
      title: "Campaign 26",
      status: "inactive",
      statusCode: "code-26",
      statusPercentage: "45%",
      dateFrom: "2023-07-26",
      dateTo: "2023-08-26",
      name: "Campaign Name 26",
      address: "Campaign Address 26",
    },
    {
      uuid: "some-uuid-27",
      title: "Campaign 27",
      status: "active",
      statusCode: "code-27",
      statusPercentage: "80%",
      dateFrom: "2023-07-27",
      dateTo: "2023-08-27",
      name: "Campaign Name 27",
      address: "Campaign Address 27",
    },
    {
      uuid: "some-uuid-28",
      title: "Campaign 28",
      status: "inactive",
      statusCode: "code-28",
      statusPercentage: "35%",
      dateFrom: "2023-07-28",
      dateTo: "2023-08-28",
      name: "Campaign Name 28",
      address: "Campaign Address 28",
    },
    {
      uuid: "some-uuid-29",
      title: "Campaign 29",
      status: "active",
      statusCode: "code-29",
      statusPercentage: "65%",
      dateFrom: "2023-07-29",
      dateTo: "2023-08-29",
      name: "Campaign Name 29",
      address: "Campaign Address 29",
    },
    {
      uuid: "some-uuid-30",
      title: "Campaign 30",
      status: "inactive",
      statusCode: "code-30",
      statusPercentage: "25%",
      dateFrom: "2023-07-30",
      dateTo: "2023-08-30",
      name: "Campaign Name 30",
      address: "Campaign Address 30",
    },
  ],
});
