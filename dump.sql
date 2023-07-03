--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    plataforma character varying(255) NOT NULL,
    genero character varying(255) NOT NULL,
    status character varying(255) NOT NULL,
    nota double precision,
    resumo text
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (15, 'Filme 1', 'Netflix', 'Ação', 'Assistido', 8.5, 'Um filme de ação emocionante.');
INSERT INTO public.movies VALUES (16, 'Filme 2', 'Prime', 'Comédia', 'Assistido', 7.2, 'Uma comédia engraçada.');
INSERT INTO public.movies VALUES (18, 'Filme 4', 'Prime', 'Ficção Científica', 'Não Assistido', NULL, NULL);
INSERT INTO public.movies VALUES (19, 'Filme 5', 'Netflix', 'Ação', 'Não Assistido', NULL, NULL);
INSERT INTO public.movies VALUES (20, 'Filme 6', 'Prime', 'Drama', 'Assistido', 9, 'Um filme dramático e emocionante.');
INSERT INTO public.movies VALUES (21, 'Filme 7', 'Netflix', 'Comédia', 'Não Assistido', NULL, NULL);
INSERT INTO public.movies VALUES (22, 'Filme 8', 'Prime', 'Ação', 'Assistido', 7.8, 'Uma aventura cheia de ação.');
INSERT INTO public.movies VALUES (23, 'Filme 9', 'Netflix', 'Drama', 'Assistido', 8.2, 'Uma história emocionante de superação.');
INSERT INTO public.movies VALUES (24, 'Filme 10', 'Prime', 'Ficção Científica', 'Assistido', 7, 'Muito chato não vejam');
INSERT INTO public.movies VALUES (25, 'avatar', 'prime', 'ação', 'Assistido', 10, 'Não consigo parar de assistir');


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 25, true);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

