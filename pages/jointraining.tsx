import Navbar from "@/components/Navbar";
import React, {useContext} from "react";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Select from 'react-select'
import axios from "axios";
import { toast } from 'react-hot-toast';
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useMutation, UseMutationResult} from "@tanstack/react-query";
import ErrorContainer from "@/components/ErrorContainer";
import ModalContext from "@/context/Modal/ModalContext";
import {ScaleLoader} from "react-spinners";


type FormValues = {
    state_of_Residence: string | null;
    faculty: string | null;
    level: string | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    date_of_birth: string | null;
    department: string | null;
    email: string | null;
    phone_number: string | null;
};

type APIResponse = {
    response: any;
};
function Jointraining(){

    const { modalDispatch } = useContext(ModalContext);

    const validationSchema = Yup.object({
        first_name: Yup.string().required('Enter your first name').max(150,'Name is too long. Please shorten it.').min(1, 'Name is too short'),
        middle_name: Yup.string().required('Enter your middle name').max(150,'Name is too long. Please shorten it.').min(1, 'Name is too short'),
        last_name: Yup.string().required('Enter your last name').max(150,'Name is too long. Please shorten it.').min(1, 'Name is too short'),
        email: Yup.string().required('Enter your email').email('Enter a valid email format').max(254,'Email is too long. Please shorten it.').min(1, 'Email is too short'),
        state_of_Residence: Yup.object().required('Select a state of residence'),
        faculty: Yup.object().required('Select your faculty'),
        level: Yup.object().required('Select your level'),
        department: Yup.string().required('Enter your department'),
        phone_number: Yup.string().required('Enter your phone number'),
    })

    const { register, handleSubmit, control, watch, formState: { errors } }
        = useForm({
        defaultValues: {
            state_of_Residence: null,
            faculty: null,
            level: null,
            first_name:null,
            middle_name:null,
            last_name:null,
            date_of_birth:null,
            department:null,
            email:null,
            phone_number:null,
        },
        resolver: yupResolver(validationSchema)
    });
    const getStateOptions = [
        { value: 'Abia', label: 'Abia' },
        { value: 'Adamawa', label: 'Adamawa' },
        { value: 'Akwa-Ibom', label: 'Akwa-Ibom' },
        { value: 'Anambra', label: 'Anambra' },
        { value: 'Bauchi', label: 'Bauchi' },
        { value: 'Bayelsa', label: 'Bayelsa' },
        { value: 'Benue', label: 'Benue' },
        { value: 'Borno', label: 'Borno' },
        { value: 'Cross-River', label: 'Cross-River' },
        { value: 'Delta', label: 'Delta' },
        { value: 'Ebonyi', label: 'Ebonyi' },
        { value: 'Edo', label: 'Edo' },
        { value: 'Ekiti', label: 'Ekiti' },
        { value: 'Enugu', label: 'Enugu' },
        { value: 'Gombe', label: 'Gombe' },
        { value: 'Imo', label: 'Imo' },
        { value: 'Jigawa', label: 'Jigawa' },
        { value: 'Kaduna', label: 'Kaduna' },
        { value: 'Kano', label: 'Kano' },
        { value: 'Katsina', label: 'Katsina' },
        { value: 'Kebbi', label: 'Kebbi' },
        { value: 'Kogi', label: 'Kogi' },
        { value: 'Kwara', label: 'Kwara' },
        { value: 'Lagos', label: 'Lagos' },
        { value: 'Nasarawa', label: 'Nasarawa' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Ogun', label: 'Ogun' },
        { value: 'Ondo', label: 'Ondo' },
        { value: 'Osun', label: 'Osun' },
        { value: 'Oyo', label: 'Oyo' },
        { value: 'Plateau', label: 'Plateau' },
        { value: 'Rivers', label: 'Rivers' },
        { value: 'Sokoto', label: 'Sokoto' },
        { value: 'Taraba', label: 'Taraba' },
        { value: 'Yobe', label: 'Yobe' },
        { value: 'Zamfara', label: 'Zamfara' },
        { value: 'Abuja', label: 'Abuja' },
    ]
    const getFacultyOptions = [
        { value: 'Arts', label: 'Arts' },
        { value: 'Agriculture', label: 'Agriculture' },
        { value: 'Basic Medical Sciences', label: 'Basic Medical Sciences' },
        { value: 'Dentistry', label: 'Dentistry' },
        { value: 'Education', label: 'Education' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Environmental Sciences', label: 'Environmental Sciences' },
        { value: 'Law', label: 'Law' },
        { value: 'Management Science', label: 'Management Science' },
        { value: 'Pharmacy', label: 'Pharmacy' },
        { value: 'Physical Science', label: 'Physical Science' },
        { value: 'Social Science', label: 'Social Science' },
        { value: 'School of Medical Sciences', label: 'School of Medical Sciences' },
        { value: 'College of Medicine', label: 'College of Medicine' },
        { value: 'Veterinary Medicine', label: 'Veterinary Medicine' },
    ];
    const getLevels = [
        { value: '100', label: '100' },
        { value: '200', label: '200' },
        { value: '300', label: '300' },
        { value: '400', label: '400' },
        { value: '500', label: '500' },
        { value: '600', label: '600' },
        { value: 'other', label: 'other' },
    ];

    const {isLoading, mutateAsync}: UseMutationResult<APIResponse, unknown, FormValues> = useMutation((data:(FormValues|any)) => {
        // Rebuild FORM DATA
        let level = data.level.value;
        let faculty = data.faculty.value;
        let state_of_Residence = data.state_of_Residence.value;

        let restructuredFormData = {...data, level, faculty, state_of_Residence};

        return axios.post('https://ebl.onrender.com/api/register', restructuredFormData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    },{
        onError: ({response})=>{
            toast.error("An error occurred");
        },
        onSuccess: ()=>{
            modalDispatch({ type: 1 });
        },
    });

    const onSubmit:SubmitHandler<FormValues> = async (data: FormValues) => {
        await mutateAsync(data);
    };
    return(
        <div>
            <Navbar/>
            <section className="max-w-6xl mx-auto">
                <header className="text-center">
                    <h2 className="text-ebl-black font-bold text-3xl">
                        Join EBL Training
                    </h2>
                    <p className="text-ebl-black mt-2 text-lg">
                        Congratulations on making the decision of joining this training. Fill out this form correctly and submit it after completion
                    </p>
                </header>
                <form className="mt-10 px-5" onSubmit={handleSubmit(onSubmit)}>
                    <section className="grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 my-2">
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">First Name</label>
                            <input
                                type="text"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="Oghenerukevwe"
                                {...register("first_name")} />
                            <ErrorContainer>
                                {errors?.first_name?.message}
                            </ErrorContainer>
                        </div>
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Middle Name</label>
                            <input
                                type="text"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="Oghenerukevwe"
                                {...register("middle_name")} />
                            <ErrorContainer>
                                {errors?.middle_name?.message}
                            </ErrorContainer>
                        </div>
                    </section>

                    <section className="grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 my-2">
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Last Name</label>
                            <input
                                type="text"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="Oghenerukevwe"
                                {...register("last_name")} />
                            <ErrorContainer>
                                {errors?.last_name?.message}
                            </ErrorContainer>
                        </div>
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Date of Birth</label>
                            <input
                                type="date"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="name@example.com"
                                {...register("date_of_birth")} />
                            <ErrorContainer>
                                {errors?.date_of_birth?.message}
                            </ErrorContainer>
                        </div>
                    </section>

                    <section className="grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 my-2">
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">State of Residence</label>
                            <Controller
                                name="state_of_Residence"
                                control={control}
                                render={({ field }) =>  <Select
                                    {...field}
                                    unstyled={true}
                                    options={getStateOptions}
                                    classNames={{
                                        control: () => "bg-transparent border border-solid border-tertiary1 px-2 text-black rounded-md py-2",
                                        menuList: () => "text-black border border-tertiary1 text-center text-base rounded-md my-2",
                                        menu: () => "rounded-md my-2 bg-white text-black",
                                    }}
                                />}
                            />
                            <ErrorContainer>
                                {errors?.state_of_Residence?.message}
                            </ErrorContainer>
                        </div>
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Faculty</label>
                            <Controller
                                name="faculty"
                                control={control}
                                render={({ field }) =>  <Select
                                    {...field}
                                    unstyled={true}
                                    options={getFacultyOptions}
                                    classNames={{
                                        control: () => "bg-transparent border border-solid border-tertiary1 px-2 text-black rounded-md py-2",
                                        menuList: () => "text-black border border-tertiary1 text-center text-base rounded-md my-2",
                                        menu: () => "rounded-md my-2 bg-white text-black",
                                    }}
                                />}
                            />
                            <ErrorContainer>
                                {errors?.faculty?.message}
                            </ErrorContainer>
                        </div>
                    </section>

                    <section className="grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 my-2">
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Department</label>
                            <input
                                type="text"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="Input Department"
                                {...register("department")} />
                            <ErrorContainer>
                                {errors?.department?.message}
                            </ErrorContainer>
                        </div>
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Level</label>
                            <Controller
                                name="level"
                                control={control}
                                render={({ field }) =>  <Select
                                    {...field}
                                    unstyled={true}
                                    options={getLevels}
                                    classNames={{
                                        control: () => "bg-transparent border border-solid border-tertiary1 px-2 text-black rounded-md py-2",
                                        menuList: () => "text-black border border-tertiary1 text-center text-base rounded-md my-2",
                                        menu: () => "rounded-md my-2 bg-white text-black",
                                    }}
                                />}
                            />
                            <ErrorContainer>
                                {errors?.level?.message}
                            </ErrorContainer>
                        </div>
                    </section>

                    <section className="grid sm:grid-cols-2 grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-4 my-2">
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Email Address</label>
                            <input
                                type="text"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="xyz@example.com"
                                {...register("email")} />
                            <ErrorContainer>
                                {errors?.email?.message}
                            </ErrorContainer>
                        </div>
                        <div className="">
                            <label className="text-ebl-black text-lg" htmlFor="full_name">Phone Number</label>
                            <input
                                type="text"
                                className="border border-tertiary1 rounded block w-full p-2"
                                placeholder="11 digit number"
                                {...register("phone_number")} />
                            <ErrorContainer>
                                {errors?.phone_number?.message}
                            </ErrorContainer>
                        </div>
                    </section>

                    <section>
                        <button className="block mx-auto bg-ebl-primary py-3 rounded-lg w-1/2 my-16 text-white">
                            <div className="flex items-center justify-center gap-3">
                                <span>Join EBL</span>
                                {
                                    isLoading && <ScaleLoader
                                        color="#fff"
                                        height={20}
                                        width={3}
                                    />
                                }
                            </div>
                        </button>
                    </section>
                </form>
            </section>
        </div>
    )
}
export default Jointraining;