import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = (props: Props) => {
  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      reset();
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="mb-8 md:w-3/5 "
    >
      <form
        className="flex flex-col gap-3"
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/72998a10218022c4ac2919dd6bfe3862"
        method="POST"
      >
        <input
          className="rounded-md bg-primary-300 py-1 px-3 text-white placeholder-white outline-none"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "Name is required",
            maxLength: 100,
          })}
        />

        <p className="text-sm text-red-500">{errors.name?.message}</p>

        <input
          className="rounded-md bg-primary-300 py-1 px-3 text-white placeholder-white outline-none"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <p className="text-sm text-red-500">{errors.email?.message}</p>

        <textarea
          className="h-20 rounded-md bg-primary-300 py-1 px-3 text-white placeholder-white outline-none"
          placeholder="Message"
          {...register("message", {
            required: "Message is required",
            maxLength: 2000,
          })}
        />
        <p className="text-sm text-red-500">{errors.message?.message}</p>
        <div>
          <button
            type="submit"
            className=" rounded-md bg-secondary-500 px-10 py-2 text-white hover:bg-primary-500 "
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
