export default function Faq({ question, answer }) {
  return (
    <div>
      <p className="leading-loose font-poppins text-xl font-medium text-black dark:text-white">
        {question}
      </p>
      <p className="w-full font-openSans text-base text-gray-600 dark:text-gray-300">
        {answer}
      </p>
    </div>
  );
}
