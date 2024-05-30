"use client";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { ISchedule } from "@/types/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
  // console.log(data);

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  // console.log(schedules);

  useEffect(() => {
    const updateData = schedules?.map(
      (doctorSchedule: ISchedule, index: number) => {
        console.log({
          startDate: doctorSchedule?.schedule?.startDateTime,
          startTime: doctorSchedule?.schedule?.startDateTime,
          endTime: doctorSchedule?.schedule?.endDateTime,
        });
        return {
          sl: index + 1,
          id: doctorSchedule?.scheduleId,
          startDate: dateFormatter(doctorSchedule?.schedule?.startDateTime),
          startTime: dayjs(doctorSchedule?.schedule?.startDateTime).format(
            "hh:mm a"
          ),
          endTime: dayjs(doctorSchedule?.schedule?.endDateTime).format(
            "hh:mm a"
          ),
        };
      }
    );
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Date", flex: 1 },
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
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>
        Create Doctor Schedule
      </Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={allSchedule ?? []} columns={columns} />
          </Box>
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
