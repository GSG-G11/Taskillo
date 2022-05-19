import React from 'react';

export default function Cards() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks.value);

  const getDetails = async (projectid) => {
    try {
      const response = await axios.get(
        `/api/v1/project/${projectid}/tasksSection`
      );
      if (response.status === 200) {
        dispatch(setTask({ tasks: response.data.data }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return <div>Cards</div>;
}
