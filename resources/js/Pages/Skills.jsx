import { useForm } from "@inertiajs/react";

export default function Skills() {

    const requestForm = useForm({
        skill: "",
        description: "",
    });

    const offerForm = useForm({
        skill: "",
        description: "",
    });

    function submitRequest() {
        requestForm.post("/listings", {
            data: {
                title: "Skill Request",
                skill: requestForm.data.skill,
                description: requestForm.data.description,
                type: "request",
            },
            onSuccess: () => requestForm.reset(),
        });
    }

    function submitOffer() {
        offerForm.post("/listings", {
            data: {
                title: "Skill Offer",
                skill: offerForm.data.skill,
                description: offerForm.data.description,
                type: "offer",
            },
            onSuccess: () => offerForm.reset(),
        });
    }

    return (
        <div>
            <h1>Skill Sharing</h1>

            <section>
                <h2>Requests</h2>

                <input
                    placeholder="Skill"
                    value={requestForm.data.skill}
                    onChange={e => requestForm.setData("skill", e.target.value)}
                />

                <textarea
                    placeholder="Request description"
                    value={requestForm.data.description}
                    onChange={e => requestForm.setData("description", e.target.value)}
                />

                <button
                    disabled={requestForm.processing}
                    onClick={submitRequest}
                >
                    Add Request
                </button>
            </section>

            <hr />

            <section>
                <h2>Offers</h2>

                <input
                    placeholder="Skill name"
                    value={offerForm.data.skill}
                    onChange={e => offerForm.setData("skill", e.target.value)}
                />

                <textarea
                    placeholder="Offer description"
                    value={offerForm.data.description}
                    onChange={e => offerForm.setData("description", e.target.value)}
                />

                <button
                    disabled={offerForm.processing}
                    onClick={submitOffer}
                >
                    Add Offer
                </button>
            </section>
        </div>
    );
}
