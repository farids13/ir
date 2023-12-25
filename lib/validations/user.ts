import { JSONSchema7 } from "json-schema";
import { z } from "zod";

export const upsertUserSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
});

export type UpsertUserSchema = z.infer<typeof upsertUserSchema>;

export const upsertUserSchemaJSON: JSONSchema7 = {
    type: "object",
    properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string", minLength: 6 },
        confirmPassword: { type: "string", minLength: 6 },
    },
    required: ["id", "name", "email", "password", "confirmPassword"],
    additionalProperties: false,
};