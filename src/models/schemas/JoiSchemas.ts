import Joi from "joi";

const estadoCivil = ["Solteiro", "Casado", "Divorciado", "Separado", "Viúvo"];
const funcao = ["Organizador", "Docente"];
const departamento = [
  "Hogwarts",
  "Vale",
  "Ministerio",
  "Times",
  "Embaixada",
  "Portugues",
  "Literatura",
  "Ingles",
  "Espanhol",
  "Matematica",
  "Biologia",
  "Historia",
  "Geografia",
  "Fisica",
  "Quimica",
  "Folosofia",
  "Redacao",
];

const EntradaSchema = Joi.object({
  ano: Joi.string().required(),
  mes: Joi.string().required(),
});
const EnderecoSchema = Joi.object({
  cidade: Joi.string().required(),
  cep: Joi.string().required(),
  rua: Joi.string().required(),
  bairro: Joi.string().required(),
  complemento: Joi.string(),
});
export const VoluntarioSchema = Joi.object({
  cursoId: Joi.number().required(),
  nome: Joi.string().required(),
  dataNasc: Joi.string()
    .pattern(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)
    .required(),
  telefone: Joi.string()
    .pattern(/\([0-9]{2}\) [0-9]{5}-[0-9]{4}/)
    .required(),
  email: Joi.string().email().required(),
  cpf: Joi.string()
    .pattern(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/)
    .required(),
  rg: Joi.string().required(),
  estadoCivil: Joi.string()
    .valid(...estadoCivil)
    .required(),
  funcao: Joi.string()
    .valid(...funcao)
    .required(),
  departamento: Joi.string()
    .valid(...departamento)
    .required(),
  entrada: EntradaSchema.required(),
  endereco: EnderecoSchema.required(),
});
