<template>
    <form role="form">
        <div class="panel panel-primary setup-content" id="step-1">

            <div class="panel-body">
                <table class="table table-striped custom-table-style figma-table-new mt-4">
                    <thead>
                        <tr>
                            <th width="30%">Add plan name</th>
                            <th width="30%">$ Amount</th>
                            <th width="30%">Job Owner</th>
                            <th width="10%"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div class="form-group"><input type="text" class="form-control"
                                        placeholder="Product name"></div>
                            </td>
                            <td>
                                <div class="form-group"><input type="text" class="form-control"
                                        placeholder="Dollar amount"></div>
                            </td>
                            <td>
                                <div class="form-group">
                                    <select class="form-control" id="sel1" placeholder="Select job owner"
                                        v-model="selectedPerson">
                                        <option v-for="jobOwner in jobOwners" :value="jobOwner.id">{{jobOwner.name}}
                                        </option>
                                    </select>
                                </div>
                            </td>
                            <td class="text-right pr-3"><i class="fa fa-trash" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>

                </table>
                <button class="btn addrow pull-left mt-2" type="button">+ Add Row</button>
                <button class="btn btn-primary nextBtn pull-right mt-4" type="button">Next</button>
            </div>
        </div>

        <div class="panel panel-primary setup-content" id="step-2">

            <div class="panel-body">
                <table class="table table-striped custom-table-style figma-table-new mt-4" style="width:60%">
                    <thead>
                        <tr>
                            <th width="50%">$ Sum</th>
                            <th width="50%">Job Owner</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>[Sum of dollar amount]</td>
                            <td>[Job owner]</td>

                        </tr>
                    </tbody>

                </table>
                <button class="btn addrow pull-left mt-2 backBtn" type="button"><i class='fa fa-angle-left'></i>
                    Back</button>

            </div>
        </div>


    </form>
</template>

<script>
export default {
    data() {
        return {
            jobOwners: [],
            selectedPerson: ""
        }
    },
    async mounted() {
        const res = await fetch("https://demo-api.bettercommissions.com/interview-data/users");
        const data = await res.json();
        console.log("data", data);
        this.jobOwners = data.users;
    },
    methods: {

    }
}
</script>