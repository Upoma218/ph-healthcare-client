export interface IDoctor {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number | undefined;
  gender: "MALE" | "FEMALE";
  appointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialities?: ISpecialities[];
}

export interface ISpecialities {
  specialitiesId: string;
  isDeleted?: null;
}

export interface IDoctorFormData {
  doctor: IDoctor;
  password: string;
}
