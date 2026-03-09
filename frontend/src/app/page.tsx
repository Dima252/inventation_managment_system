import CsvUploader from '../components/CsvUploader';
import ValidationTable from '../components/ValidationTable';
import PhaseButtons from '../components/PhaseButtons';

export default function Home() {
    return (
        <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Wedding Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your guest list and WhatsApp invitations</p>
                </header>

                <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">1. Upload Guest List</h2>
                    <CsvUploader />
                </section>

                <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">2. Validate Numbers</h2>
                    <ValidationTable />
                </section>

                <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">3. Send Invitations</h2>
                    <PhaseButtons />
                </section>
            </div>
        </main>
    );
}
