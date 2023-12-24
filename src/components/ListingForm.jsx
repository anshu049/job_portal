import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";


const initialValues = {
  title: "",
  description: "",
  type: "Remote",
  salary: "",
  requirements: [],
  skills: [],
};

const validationSchema = Yup.object({
  title: Yup.string()
    .max(80, "Must be less than 80 words")
    .required("Required"),
  description: Yup.string()
    .max(400, "Must be less than 400 words")
    .required("Required"),
  type: Yup.string()
    .oneOf(["On Site", "Remote", "Hybrid"], "Remote,On Site or Hybrid")
    .required("Required")
    .default("Remote"),
  salary: Yup.string().required("Required"),
  requirements: Yup.array()
    .of(Yup.string().max(150,"Not more than 150 characters for a requirement"))
    .min(2, "Give at least 2 requirements")
    .max(8, "not more than 8 requirements")
    .required(),
  skills: Yup.array(Yup.string().max(20,"Not more than 20 characters for a skill"))
    .min(3, "Mention at least 3 skills required by candidate")
    .max(8)
    .required(),
});

const onSubmitForm = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const errorRender = (msg)=>{
    const type = typeof msg;
    if(type === 'object'){
        msg = msg.filter((item)=>item!=null);
    }
    console.log(msg)
    return <div className="text-red-400">{type=== "object" ? msg[0] : msg}</div>
}

// const labelStyle = " ";

const ListingForm = () => {
  return (
    <div>
        <p className="font-bold text-2xl">Enter Job Requirements</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="m-1">
              <label className="font-bold block text-xl" htmlFor="title">
                Enter Title
              </label>
              <div className="border-accent-color  border-2 rounded-lg min-h-16  w-full px-2 py-2">
                <Field
                  className="w-full outline-none text-lg caret-accent-color"
                  name="title"
                  type="text"
                  placeholder="Enter the Job Title"
                />
                <ErrorMessage
                  component="div"
                  className="text-red-400 "
                  name="title"
                />
              </div>
            </div>

            <div className="m-1">
              <label className="font-bold block text-xl" htmlFor="description">
                Enter Description
              </label>
              <div className="border-accent-color  border-2 rounded-lg min-h-16  w-full px-2 py-2">
                <Field
                  className="w-full outline-none line-clamp-1 caret-accent-color"
                  name="description"
                  as="textarea"
                  placeholder="Enter the Job Description"
                />
                <ErrorMessage
                  component="div"
                  className="text-red-400 "
                  name="description"
                />
              </div>
            </div>

            <div className="m-1">
              <label className="font-bold block text-xl" htmlFor="type">
                Select type
              </label>
              <div className="border-accent-color  border-2 rounded-lg  w-full px-2 py-2">
                <Field
                  className="w-full outline-none line-clamp-1 caret-accent-color"
                  name="type"
                  as="select"
                >
                  <option value="Remote">Remote</option>
                  <option value="On Site">On Site</option>
                  <option value="Hybrid">Hybrid</option>
                </Field>
                <ErrorMessage
                  component="div"
                  className="text-red-400 "
                  name="type"
                />
              </div>
            </div>

            <div className="m-1">
              <label className="font-bold block text-xl" htmlFor="salary">
                Enter Salary Bracket
              </label>
              <div className="border-accent-color  border-2 rounded-lg min-h-16  w-full px-2 py-2">
                <Field
                  className="w-full outline-none caret-accent-color"
                  name="salary"
                  type="text"
                  placeholder="Enter Salary Bracket(Eg 100k-400k)"
                />
                <ErrorMessage
                  component="div"
                  className="text-red-400 "
                  name="salary"
                />
              </div>
            </div>

            <div className="m-1">
              <label className="font-bold block text-xl" htmlFor="requirements">
                Enter Requirements
              </label>
              <FieldArray name="requirements">
                {({push }) => (
                  <div>
                    {values.requirements.length > 0 &&
                      values.requirements.map((requirement, index) => (
                        <div
                          className="border-accent-color  border-2 rounded-lg mt-2  w-full px-2 py-2"
                          key={index}
                        >
                          <div className="flex gap-2">
                            <label
                              className="font-semibold"
                              htmlFor={`Requirement ${index}`}
                              key={index}
                            >
                              Requirement {index + 1}
                            </label>
                            <button
                              type="button"
                              className="bg-accent-color p-1 text-xs font-bold text-white rounded-lg"
                              onClick={() => {
                                setFieldValue(
                                  "requirements",
                                  values.requirements.filter(
                                    (item) => item != values.requirements[index]
                                  )
                                );
                              }}
                            >
                              <IoClose />
                            </button>
                          </div>
                          <Field
                            className="flex-grow line-clamp-1 w-full outline-none caret-accent-color"
                            name={`requirements[${index}]`}
                            as="textarea"
                            placeholder={`Enter Requirement ${index + 1}`}
                          />
                        </div>
                      ))}

                    <button
                      type="button"
                      className=" mt-4 bg-accent-color p-2 font-normal text-base text-white rounded-lg"
                      onClick={() => {
                        if (values.requirements.length < 8) {
                          push("");
                        }
                      }}
                    >
                      {values.requirements.length < 8
                        ? "Add requirement +"
                        : "Only 8 requirements allowed"}
                    </button>
                  </div>
                )}
              </FieldArray>
              <ErrorMessage
                render={errorRender}
                name="requirements"
              />
            </div>

            <div className="m-1">
              <label className="font-bold block text-xl" htmlFor="skills">
                Enter Required Skills
              </label>
              <FieldArray name="skills">
                {({ push }) => (
                  <div>
                    {values.skills.length > 0 &&
                      values.skills.map((skill, index) => (
                        <div
                          className="border-accent-color  border-2 rounded-lg mt-2  w-full px-2 py-2"
                          key={index}
                        >
                          <div className="flex gap-2">
                            <label
                              className="font-semibold"
                              htmlFor={`Requirement ${index}`}
                              key={index}
                            >
                              Skill {index + 1}
                            </label>
                            <button
                              type="button"
                              className="bg-accent-color p-1 text-xs font-bold text-white rounded-lg"
                              onClick={() => {
                                
                                setFieldValue(
                                  "skills",
                                  values.skills.filter(
                                    (item) => item != values.skills[index]
                                  )
                                );
                              }}
                            >
                              <IoClose />
                            </button>
                          </div>
                          <Field
                            className="flex-grow line-clamp-1 w-full outline-none caret-accent-color"
                            name={`skills[${index}]`}
                            type="text"
                            placeholder={`Enter Skill ${index + 1}`}
                          />
                        </div>
                      ))}

                    <button
                      type="button"
                      className=" mt-4 bg-accent-color p-2 font-normal text-base text-white rounded-lg"
                      onClick={() => {
                        if (values.requirements.length < 8) {
                          push("");
                        }
                      }}
                    >
                      {values.requirements.length < 8
                        ? "Add skill +"
                        : "Only 8 skills allowed"}
                    </button>
                  </div>
                )}
              </FieldArray>
              <ErrorMessage
                
                
                name="skills"
                render={errorRender}
              />
            </div>

            <div className="flex justify-end">
              <button
                className=" block mt-4 bg-accent-color p-2 font-normal text-base text-white rounded-lg "
                type="submit"
              >
                Post Job
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ListingForm;
