import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type QuestionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerQuestions = {
  readonly id: string;
  readonly user_id?: string | null;
  readonly question_text?: string | null;
  readonly choice_1?: string | null;
  readonly choice_2?: string | null;
  readonly choice_1_votes?: string | null;
  readonly choice_2_votes?: string | null;
  readonly is_active?: string | null;
  readonly created_at?: string | null;
  readonly updated_at?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestions = {
  readonly id: string;
  readonly user_id?: string | null;
  readonly question_text?: string | null;
  readonly choice_1?: string | null;
  readonly choice_2?: string | null;
  readonly choice_1_votes?: string | null;
  readonly choice_2_votes?: string | null;
  readonly is_active?: string | null;
  readonly created_at?: string | null;
  readonly updated_at?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Questions = LazyLoading extends LazyLoadingDisabled ? EagerQuestions : LazyQuestions

export declare const Questions: (new (init: ModelInit<Questions, QuestionsMetaData>) => Questions) & {
  copyOf(source: Questions, mutator: (draft: MutableModel<Questions, QuestionsMetaData>) => MutableModel<Questions, QuestionsMetaData> | void): Questions;
}