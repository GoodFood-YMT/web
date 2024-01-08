
import { useFetchProviderById } from "~/hooks/providers/use_fetch_providers_by_id";

interface Props {
    id: string;
}

const EditProviderForm = ({ id }: Props) => {

    const providers = useFetchProviderById(id);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom du fournisseur:
                <input type="text" value={providers.name} />
            </label>
            <button type="submit">Enregistrer</button>
        </form>
    );
};

