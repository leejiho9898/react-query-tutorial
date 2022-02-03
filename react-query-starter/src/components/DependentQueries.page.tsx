import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserByEamil = async (email: string) => {
  const response = await axios.get(`http://localhost:4000/users/${email}`);
  return response.data;
};

const fetchCoursesByChannelId = async (channelId: string) => {
  const response = await axios.get(
    `http://localhost:4000/channels/${channelId}`
  );
  return response.data;
};

interface PropsType {
  email: string;
}
const DependentQueriesPage = ({ email }: PropsType) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEamil(email)
  );
  const channelId = user?.channelId;

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
