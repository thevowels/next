import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, PaymentFormSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });
  const router = useRouter();
  const handleShippingForm: SubmitHandler<PaymentFormInputs> = (data) => {
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-sm text-gray-500  font-medium"
        >
          Card Holder
        </label>
        <input
          className="border-b border-gray-300 py-2 outline-none text-sm "
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-sm text-gray-500  font-medium"
        >
          cardNumber
        </label>
        <input
          className="border-b border-gray-300 py-2 outline-none text-sm "
          type="text"
          id="cardNumber"
          placeholder="234 1876 3249 3574"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-sm text-gray-500  font-medium"
        >
          expirationDate
        </label>
        <input
          className="border-b border-gray-300 py-2 outline-none text-sm "
          type="text"
          id="expirationDate"
          placeholder="1 234 5678"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-sm text-gray-500  font-medium">
          cvv
        </label>
        <input
          className="border-b border-gray-300 py-2 outline-none text-sm "
          type="password"
          id="cvv"
          placeholder="***"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-500">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/klarna.png"
          alt="klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="visa/master"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        type="submit"
        className=" w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg flex items-center justify-center cursor-pointer"
      >
        Continue <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}
