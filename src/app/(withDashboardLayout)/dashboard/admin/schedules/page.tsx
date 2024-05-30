"use client";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ScheduleModal from "./components/ScheduleModal";
const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllSchedulesQuery({});

  const schedules = data?.schedules;
  console.log(schedules);
  const meta = data?.meta;

  // console.log(schedules);

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule?.startDateTime),
        endDate: dateFormatter(schedule?.endDateTime),
        startTime: dayjs(schedule?.startDateTime).format("hh:mm a"),
        endTime: dayjs(schedule?.endDateTime).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon sx={{}} />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default SchedulesPage;
