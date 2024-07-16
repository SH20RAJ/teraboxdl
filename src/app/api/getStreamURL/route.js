export const GET = async (req, res) => {
  return Response.json(
    {
      error: "Missing data",
    },
    {
      status: 400,
    }
  );
};
