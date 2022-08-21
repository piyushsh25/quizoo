import { QuizType } from "./Database.type";

const quiz1: QuizType = {
  name: "GAME OF THRONES QUIZ",
  questions: [
    {
      question:
        "Locke infiltrated the Night's Watch on behalf of Bolton, but what happened when he was caught?",
      points: 10,
      options: [
        { option: "Hodor broke his neck", isRight: true },
        { option: "Jon Snow beheaded him", isRight: false },
        { option: "Thrown to the dogs", isRight: false },
        { option: "Hodor broke his leg", isRight: false },
        { option: "Thrown to the dogs cats", isRight: false },
      ],
    },
    {
      question: "What is Hodor's real name?",
      points: 10,
      options: [
        { option: "William", isRight: false },
        { option: "Wylis", isRight: true },
        { option: "Wycliffe", isRight: false },
        { option: "Wylifes", isRight: false },
        { option: "Lucifer", isRight: false },
      ],
    },
    {
      question: "What is the name of the final episode of series 7?",
      points: 10,
      options: [
        { option: "The Wolf and the Lion", isRight: false },
        { option: "The Old Gods and the New", isRight: false },
        { option: "The Dragon and the Wolf", isRight: true },
        { option: "The Spoils of War", isRight: false },
        { option: "Stormborn", isRight: false },
      ],
    },
    {
      question:
        "Daenerys has 3 dragons, two are called Drogon and Rhaegal, what is the other called?",
      points: 10,
      options: [
        { option: "Dagahra", isRight: false },
        { option: "Diaval", isRight: false },
        { option: "Eborsisk", isRight: false },
        { option: "Apalala", isRight: false },
        { option: "Viserion", isRight: true },
      ],
    },
    {
      question: "How did Cersi's child Myrcella die?",
      points: 10,
      options: [
        { option: "drowning", isRight: false },
        { option: "Poisoned", isRight: true },
        { option: "homicide", isRight: false },
        { option: "suicide", isRight: false },
        { option: "injuries", isRight: false },
      ],
    },
  ],
  category: "series",
  difficulty: "easy",
};
const quiz2: QuizType = {
  name: "INDIAN ECONOMY",
  questions: [
    {
      question: "The central banking functions in India are performed by the? ",
      points: 10,
      options: [
        { option: "Central Bank of India", isRight: false },
        { option: "Reserve Bank of India", isRight: true },
        { option: "State Bank of India", isRight: false },
        { option: "Punjab National Bank", isRight: false },
        { option: "India Bank", isRight: false },
      ],
    },
    {
      question:
        "Development expenditure of the Central government does not include",
      points: 10,
      options: [
        { option: "defence expenditure", isRight: true },
        { option: "expenditure on economic services", isRight: false },
        {
          option: "expenditure on social and community services",
          isRight: false,
        },
        { option: "grant to states", isRight: false },
        { option: "expenditure on infrastructure", isRight: false },
      ],
    },
    {
      question: "ICICI is the name of a",
      points: 10,
      options: [
        { option: "chemical industry", isRight: false },
        { option: "eudcational instution", isRight: false },
        { option: "bureau", isRight: false },
        { option: "corporation", isRight: false },
        { option: "financial institution", isRight: true },
      ],
    },
    {
      question: "Gilt-edged market means",
      points: 10,
      options: [
        { option: "bullion market", isRight: false },
        { option: "market of government securities", isRight: true },
        { option: "market of guns", isRight: false },
        { option: "market of private players", isRight: false },
        { option: "	market of pure metals", isRight: false },
      ],
    },
    {
      question:
        "In the last one decade, which one among the following sectors has attracted the highest foreign direct investment inflows into India?",
      points: 10,
      options: [
        { option: "Chemicals other than fertilizers", isRight: false },
        { option: "Services sector", isRight: true },
        { option: "medical tourism", isRight: false },
        { option: "Food processing", isRight: false },
        { option: "Telecommunication", isRight: false },
      ],
    },
  ],
  category: "indian economy",
  difficulty: "medium",
};
const quiz3: QuizType = {
  name: "Books and authors",
  questions: [
    {
      question: "Who wrote the famous book - 'We the people'?",
      points: 10,
      options: [
        { option: "	T.N.Kaul", isRight: false },
        { option: "J.R.D. Tata", isRight: false },
        { option: "Khushwant Singh", isRight: false },
        { option: "Nani Palkhivala", isRight: true },
        { option: "None of the above", isRight: false },
      ],
    },
    {
      question: "Who is the author of the book 'Nineteen Eighty Four'?",
      points: 10,
      options: [
        { option: "Thomas Hardy", isRight: false },
        { option: "Emile Zola", isRight: false },
        { option: "George Orwell", isRight: true },
        { option: "Walter Scott", isRight: false },
        { option: "Nani Palkhivala", isRight: false },
      ],
    },
    {
      question: "Which of the following is NOT written by Munshi Premchand?",
      points: 10,
      options: [
        { option: "Gaban", isRight: false },
        { option: "Godan", isRight: false },
        { option: "Guide", isRight: true },
        { option: "Manasorovar", isRight: false },
      ],
    },
    {
      question: "Who is the author of the book 'Forbidden Verses'?",
      points: 10,
      options: [
        { option: "Salman RushDie", isRight: false },
        { option: "Abu Nuwas", isRight: false },
        { option: "Ms. Taslima Nasrin", isRight: false },
        { option: "D.H. Lawrence", isRight: false },
        { option: "Shabama Azmi", isRight: true },
      ],
    },
    {
      question: "Who wrote the line: ' A thing of beauty is a joy forever'?",
      points: 10,
      options: [
        { option: "D.H. Lawrence", isRight: true },
        { option: "Robert Browing", isRight: false },
        { option: "	P.B.Shelley", isRight: false },
        { option: "William Wordsworth", isRight: false },
        { option: "John Keats", isRight: false },
      ],
    },
  ],
  category: "books",
  difficulty: "hard",
};
const quiz4: QuizType = {
  name: "Indian History",
  questions: [
    {
      question: "The Battle of Plassey was fought in",
      points: 10,
      options: [
        { option: "1757", isRight: true },
        { option: "1782", isRight: false },
        { option: "1748", isRight: false },
        { option: "1764", isRight: false },
        { option: "1766", isRight: false },
      ],
    },
    {
      question:
        "The territory of Porus who offered strong resistance to Alexander was situated between the rivers of",
      points: 10,
      options: [
        { option: "Sutlej and Beas", isRight: false },
        { option: "Jhelum and Chenab", isRight: true },
        { option: "Ravi and Chenab", isRight: false },
        { option: "Krishna and Kaveri", isRight: false },
        { option: "Ganga and Yamuna", isRight: false },
      ],
    },
    {
      question: "Under Akbar, the Mir Bakshi was required to look after",
      points: 10,
      options: [
        { option: "military affairs", isRight: true },
        { option: "the state treasury", isRight: false },
        { option: "the royal household", isRight: false },
        { option: "the land revenue system", isRight: false },
        { option: "the foreign affairs", isRight: false },
      ],
    },
    {
      question: "Tripitakas are sacred books of",
      points: 10,
      options: [
        { option: "Buddhists", isRight: true },
        { option: "Hindus", isRight: false },
        { option: "Jains", isRight: false },
        { option: "Sikhs", isRight: false },
        { option: "None of the above", isRight: false },
      ],
    },
    {
      question: "The trident-shaped symbol of Buddhism does not represent",
      points: 10,
      options: [
        { option: "Nirvana", isRight: true },
        { option: "Sangha", isRight: false },
        { option: "Buddha", isRight: false },
        { option: "Dhamma", isRight: false },
        { option: "None of the above", isRight: false },
      ],
    },
  ],
  category: "Religion",
  difficulty: "hard",
};
const quiz5: QuizType = {
  name: "Indian Politics",
  questions: [
    {
      question:
        "The Parliament of India cannot be regarded as a sovereign body because",
      points: 10,
      options: [
        {
          option:
            "it can legislate only on subjects entrusted to the Centre by the Constitution          ",
          isRight: false,
        },
        {
          option:
            "it has to operate within the limits prescribed by the Constitution          ",
          isRight: false,
        },
        {
          option:
            "the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution          ",
          isRight: false,
        },
        { option: "All of the above ", isRight: true },
        { option: "None of the above", isRight: false },
      ],
    },
    {
      question:
        "The name of the Laccadive, Minicoy and Amindivi islands was changed to Lakshadweep by an Act of Parliament in",
      points: 10,
      options: [
        { option: "1970", isRight: false },
        { option: "1971", isRight: false },
        { option: "1972", isRight: false },
        { option: "1973", isRight: true },
        { option: "Nono of the aove", isRight: false },
      ],
    },
    {
      question: "The members of the Rajya Sabha are elected by",
      points: 10,
      options: [
        { option: "the people", isRight: false },
        { option: "Lok Sabha", isRight: false },
        {
          option: "elected members of the legislative assembly",
          isRight: true,
        },
        {
          option: "elected members of the legislative council",
          isRight: false,
        },
        { option: "the President of India", isRight: false },
      ],
    },
    {
      question: "The members of the panchayat are",
      points: 10,
      options: [
        { option: "nominated by the district officer", isRight: false },
        {
          option:
            "the electorates of the respective territorial constituencies",
          isRight: true,
        },
        {
          option: "nominated by local self-government minister of the state",
          isRight: false,
        },
        {
          option: "nominated by the block development organization",
          isRight: false,
        },
        { option: "None of the above", isRight: false },
      ],
    },
    {
      question: "The power to decide an election petition is vested in the",
      points: 10,
      options: [
        { option: "Parliament", isRight: false },
        { option: "Supreme Court", isRight: false },
        { option: "High courts", isRight: true },
        { option: "Election Commission", isRight: false },
        { option: "None of the above", isRight: false },
      ],
    },
  ],
  category: "politics",
  difficulty: "hard",
};
export const Database: QuizType[] = [quiz1, quiz2, quiz3, quiz4, quiz5];
