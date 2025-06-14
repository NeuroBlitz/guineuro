import React, { useState } from 'react';
import Head from 'next/head';
import { Download, Brain, Users, Heart, Eye, MessageCircle, Target, Book, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const GuineuroApp = () => {
  const [datosNino, setDatosNino] = useState<{
    nombre?: string;
    fechaNacimiento?: string;
    sexo?: string;
  }>({});

  return (
    <>
      <Head>
        <title>GUINEURO - Guía Interactiva de Neurodesarrollo</title>
        <meta name="description" content="Herramienta gratuita de evaluación neuropsicológica del desarrollo infantil basada en neurociencia moderna" />
        <meta name="keywords" content="neuropsicología, neurodesarrollo, evaluación, desarrollo infantil, cognición social" />
        <meta name="author" content="Ruddy A. Minaya, MSc & NeuroBlitz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-16 w-16 text-indigo-600 mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-indigo-900">GUINEURO</h1>
                <p className="text-xl text-indigo-700">Guía Interactiva de Neurodesarrollo</p>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La primera herramienta gratuita que evalúa el neurodesarrollo de tu hijo de forma científica 
              y genera un reporte profesional basado en neurociencia moderna.
            </p>
          </div>

          {/* Características */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Científicamente Fundamentado</h3>
              <p className="text-sm text-gray-600">
                Basado en ventanas críticas de mielinización y circuitos neurales específicos
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">7 Dominios Neuropsicológicos</h3>
              <p className="text-sm text-gray-600">
                Incluye cognición social y funciones ejecutivas, ausentes en otras pruebas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Download className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">Reporte Profesional</h3>
              <p className="text-sm text-gray-600">
                PDF con fundamentación neurobiológica para llevar a cualquier especialista
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Información del Niño/a</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre del niño/a</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nombre completo"
                  value={datosNino.nombre || ''}
                  onChange={(e) => setDatosNino({...datosNino, nombre: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Fecha de nacimiento</label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={datosNino.fechaNacimiento || ''}
                  onChange={(e) => setDatosNino({...datosNino, fechaNacimiento: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Sexo</label>
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={datosNino.sexo || ''}
                  onChange={(e) => setDatosNino({...datosNino, sexo: e.target.value})}
                >
                  <option value="">Seleccionar</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={() => alert('¡GUINEURO está funcionando! 🎉\n\nEn la versión completa aquí iniciaría la evaluación neuropsicológica completa con los 7 dominios.')}
              disabled={!datosNino.nombre || !datosNino.fechaNacimiento || !datosNino.sexo}
              className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Iniciar Evaluación Neuropsicológica
            </button>
          </div>

          {/* Dominios que se evaluarán */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Dominios Neuropsicológicos a Evaluar</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <span className="font-medium">Motricidad Neuropsicológica</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <Brain className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium">Funciones Ejecutivas</span>
              </div>
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <Eye className="h-6 w-6 text-purple-600 mr-3" />
                <span className="font-medium">Procesamiento Sensorial</span>
              </div>
              <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                <Users className="h-6 w-6 text-orange-600 mr-3" />
                <span className="font-medium">Cognición Social</span>
              </div>
              <div className="flex items-center p-3 bg-red-50 rounded-lg">
                <MessageCircle className="h-6 w-6 text-red-600 mr-3" />
                <span className="font-medium">Comunicación Neuropsicológica</span>
              </div>
              <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                <Book className="h-6 w-6 text-indigo-600 mr-3" />
                <span className="font-medium">Cognición Académica</span>
              </div>
              <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                <Heart className="h-6 w-6 text-pink-600 mr-3" />
                <span className="font-medium">Regulación Socioemocional</span>
              </div>
            </div>
          </div>

          {
